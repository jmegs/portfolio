activate :aria_current
activate :autoprefixer
activate :inline_svg
activate :directory_indexes
activate :livereload

set :css_dir,    "assets/stylesheets"
set :fonts_dir,  "asssets/fonts"
set :images_dir, "assets/images"
set :js_dir,     "assets/javascript"

set :markdown,
  autolink: true,
  fenced_code_blocks: true,
  footnotes: true,
  highlight: true,
  smartypants: true,
  strikethrough: true,
  tables: true,
  with_toc_data: true

set :markdown_engine, :redcarpet

# use to apply a layout from source/layouts to multiple pages
# page "work/*", :layout => :project

page "/*.json", layout: false
page "/*.txt", layout: false
page "/*.xml", layout: false

configure :production do
  activate :asset_hash
  activate :gzip
  activate :minify_css
  activate :minify_html
  # remove if using js bundler
  activate :minify_javascript
end
