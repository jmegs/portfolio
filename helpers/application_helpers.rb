module ApplicationHelpers
  def markdown(contents)
    renderer = Redcarpet::Render::HTML
    markdown = Redcarpet::Markdown.new(
      renderer,
      autolink: true,
      fenced_code_blocks: true,
      footnotes: true,
      highlight: true,
      smartypants: true,
      strikethrough: true,
      tables: true,
      with_toc_data: true
    )
    markdown.render(contents)
  end

  def page_title
    current_page_title = current_page.data.title
    if current_page_title.nil?
      config[:site_title]
    else
      "#{current_page_title} | #{config[:site_title]}"
    end
  end
end
