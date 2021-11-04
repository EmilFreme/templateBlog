require 'http'
require 'pandoc-ruby'
require 'cgi'
module Jekyll
  class GDocsToJekyll < Liquid::Tag

    def initialize(tag_name, doc_id, token)
      super
      @docId = doc_id.rstrip.lstrip
    end

    def render(context)
#      puts "|#{@docId}|".red
#      @docId = "18hCINmANE-BKmRCjQJ5E5JndzH0tX3wSecyaUmysCHY"
      gDocsURL = "https://www.googleapis.com/drive/v3/files/#{@docId}/export"
      params = {
        :mimeType => "text/html",
        #:mimeType => "application/vnd.openxmlformats-officedocument.wordprocessingml.document", 
        :key => ENV["GOOGLE_DRIVE_API_KEY"]
      }
      res = HTTP.get(gDocsURL, :params => params)


      if res.code == 200
        resBody = res.body.dup 
        mddoc = PandocRuby.convert("#{resBody}", from: :html, to: :markdown_mmd).force_encoding("UTF-8")
        "#{mddoc}"
      else
        "FUCK #{res.body}"
      end

      
    end
  end

end

Liquid::Template.register_tag('gdocs2jekyll', Jekyll::GDocsToJekyll)
