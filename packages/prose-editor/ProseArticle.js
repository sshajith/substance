import { Document } from '../../model'

class ProseArticle extends Document {
  constructor(schema) {
    super(schema)
    this._initialize()
  }

  _initialize() {
    this.create({
      type: 'container',
      id: 'body',
      nodes: []
    })
  }

}

export default ProseArticle
