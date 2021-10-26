require 'http'
require 'pandoc-ruby'
module Jekyll
  class GDocsToJekyll < Liquid::Tag

    def initialize(tag_name, text, token)
      super
      @text = text
    end

    def render(context)
      
      docId = "18hCINmANE-BKmRCjQJ5E5JndzH0tX3wSecyaUmysCHY"
      gDocsURL = "https://www.googleapis.com/drive/v3/files/#{docId}/export"
      params = {
        :mimeType => "text/html",
        #:mimeType => "application/vnd.openxmlformats-officedocument.wordprocessingml.document", 
        :key => "AIzaSyCfwBEeerTyv_vTdGcEOiMhuJTBwh9v1Wo"
      }
      res = HTTP.get(gDocsURL, :params => params)


      if res.code == 200

        mddoc = PandocRuby.new("#{res.body}", from: :html, to: :markdown_mmd)
        "#{mddoc}"
      else
        "FUCK #{res.body}"
      end

      
    end
  end

end

Liquid::Template.register_tag('gdocs2jekyll', Jekyll::GDocsToJekyll)
