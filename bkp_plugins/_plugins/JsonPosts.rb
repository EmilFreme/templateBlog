module JsonPosts
	class Generator < Jekyll::Generator
		safe true
		priority :lowest

		def generate(site)
			@site = site

			file_path = "postDB.json"

			File.expand_path(file_path, site.source)

			file = File.open("postDB.json", "w")
			file << "["
			site.posts.docs.each do |page|
					file << "{"
					file << "\"title\" : \"#{page.data["title"]}\","
					file << "\"date\" : \"#{page.data["date"]}\","
					file << "\"tags\" : #{page.data["tags"]},"
					file << "\"url\" : \"#{page.url}\""
					file << "},"
			end
			file << "{}]"
			file.close

		end
	end
end
