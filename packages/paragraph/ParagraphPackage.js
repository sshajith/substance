import Paragraph from './Paragraph'
import ParagraphComponent from './ParagraphComponent'
import ParagraphHTMLConverter from './ParagraphHTMLConverter'

export default {
  name: 'paragraph',
  configure: function(config) {
    config.addNode(Paragraph)
    config.addComponent(Paragraph.type, ParagraphComponent)
    config.addConverter('html', ParagraphHTMLConverter)
    config.addConverter('xml', ParagraphHTMLConverter)
    config.addTextType({
      name: 'paragraph',
      data: {type: 'paragraph'}
    })
    config.addLabel('paragraph', {
      en: 'Paragraph',
      de: 'Paragraph'
    })
    config.addLabel('paragraph.content', {
      en: 'Paragraph',
      de: 'Paragraph'
    })
  },
  Paragraph: Paragraph,
  ParagraphComponent: ParagraphComponent,
  ParagraphHTMLConverter: ParagraphHTMLConverter
}
