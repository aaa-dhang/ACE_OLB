import { Router } from 'express'
import { middleware as body } from 'bodymen'
import { stub, stub2, stub3 } from './controller'

const router = new Router()

const email = '';
const zipCode = '';

/**
 * @api {post} /quotes Create quote
 * @apiName CreateQuote
 * @apiGroup Quote
 * @apiPermission master
 * @apiParam {String} access_token master access token.
 * @apiParam email Quote's email.
 * @apiParam zipCode Quote's zipCode.
 * @apiSuccess {Object} quote Quote's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Quote not found.
 * @apiError 401 master access only.
 * 
 * CURL Command Test - curl -X PUT -d '{ "email" : "dh@aaa.com", "zipCode" : 90210 }' -H "Content-Type: application/json"  http://0.0.0.0:9000/api/dummy
 */
router.put('/',
  body({ email, zipCode }),
  stub)

/**
 * CURL Command Test - curl -X GET -H "Content-Type: application/json"  http://0.0.0.0:9000/api/dummy
 */
router.get('/',
  stub2)

/**
 * CURL Command Test - curl -X POST -d '{ "email" : "dh@aaa.com", "zipCode" : 90210 }' -H "Content-Type: application/json"  http://0.0.0.0:9000/api/dummy
 */
router.post('/',
  body({ email, zipCode }),
  stub3)

export default router