import { Auth0Provider } from '@bcwdev/auth0provider'
import BaseController from '../utils/BaseController.js'

export class CommentsController extends BaseController {
  constructor() {
    super('api/comments')
    this.router
      .use(Auth0Provider.getAuthorizedUserInfo)
      .post('', this.createComment)
      .delete('/:id', this.deleteComment)
      .put('/:id', this.editComment)
  }

  createComment(req, res, next) {
    try {
      req.body.creatorId = req.userInfo.id
    } catch (error) {
      next(error)
    }
  }

  deleteComment(arg0, deleteComment) {
    throw new Error('Method not implemented.')
  }

  async editComment(req, res, next) {
    try {

    } catch (error) {
      next(error)
    }
  }
}
