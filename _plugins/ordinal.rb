require 'facets/integer/ordinal'

module Jekyll
  module OrdinalFilter
    def ordinal(number)
      "#{number.to_i.ordinalize}"
    end
  end
end

Liquid::Template.register_filter(Jekyll::OrdinalFilter)