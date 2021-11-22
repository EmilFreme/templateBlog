require 'http'
require 'nokogiri'
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
        parsedHTML = Nokogiri::HTML5(resBody)

        for node in parsedHTML.css("span")
          if(node["style"])
            styleCheck = node["style"]
            # TW: 900 FS:22  H1
            if (styleCheck.include? "font-weight:900" and \
                styleCheck.include? "font-size:22")
              node.delete("style")
              newNode = parsedHTML.create_element("h1")
              newNode.inner_html = node.inner_html
              node.replace(newNode)
              # TW:700 b
            elsif (styleCheck.include? "font-weight:700")
              node.delete("style")
              newNode = parsedHTML.create_element("b")
              newNode.inner_html = node.inner_html
              node.replace(newNode)
              # TW: 400 FS 12  Basetext
            elsif( styleCheck.include? "font-weight:400" and \
                  styleCheck.include? "font-size:12")
              node.delete("style")
            end
          end
        end

        for node in parsedHTML.css("*")
          node.delete("style")
        end

        mddoc = PandocRuby.convert("#{parsedHTML.to_html}", from: :html, to: :markdown_mmd).force_encoding("UTF-8")
        "#{mddoc}"
      else
        "FUCK #{res.body}"
      end


      end
    end

  end

  Liquid::Template.register_tag('gdocs2jekyll', Jekyll::GDocsToJekyll)
