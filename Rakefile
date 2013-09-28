task default: [:build]

desc "Build static HTML"
task :build do
  puts "Compiling to HTML..."
  status = system("bundle exec middleman build") do
    puts status ? "OK" : "FAILED"
  end
end

desc "Deploy to Amazon S3"
task :deploy do
  puts "Deploying to Amazon S3..."
  status = system("lob phl-hood-reporter") do
    puts status ? "OK" : "FAILED"
  end
end
