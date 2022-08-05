/**
 *  @swagger
 *  /api/auth/register:
 *   post:
 *     tags:
 *       - Users
 *     name: register
 *     summary: creates a user
 *     consumes:
 *       - multipart/form-data
 *     parameters:
 *       - name: image
 *         type: file
 *         in: formData
 *         description: Upload image for profile picture
 *       - name: name
 *         type: string
 *         in: formData
 *         description: User's full name
 *       - name: username
 *         type: string
 *         in: formData
 *         description: User's preferred username
 *       - name: email
 *         type: string
 *         in: formData
 *         description: User's email
 *       - name: password
 *         type: string
 *         in: formData
 *         description: User password
 *         format: password
 *         schema:
 *           $ref: '#/definitions/User'
 *           type: object
 *           properties:
 *             username:
 *               type: string
 *             password:
 *               type: string
 *               format: password
 *
 *     responses:
 *       200:
 *         description: Created user successfully
 *       401:
 *         description: User with email already exists
 *       400:
 *         description: Bad request, user not created
 */

/**
 * @swagger
 * /api/auth/login:
 *    post:
 *      tags:
 *        - Users
 *      name: user login
 *      summary: logs in a user
 *      consumes:
 *        - application/json
 *      parameters:
 *        - name: body
 *          in: body
 *          schema:
 *            type: object
 *            properties:
 *              email:
 *                type: string
 *              password:
 *                type: string
 *                format: password
 *          required:
 *            - email
 *            - password
 *      responses:
 *        200:
 *          description: successfully logged in
 *        401:
 *          description: credentials don't match
 *        400:
 *          description: user not found
 */

/**
 * @swagger
 * /api/auth/verify:
 *    post:
 *      tags:
 *        - Users
 *      name: verify user
 *      summary: verify yser
 *      consumes:
 *        - application/json
 *      parameters:
 *        - name: body
 *          in: body
 *          schema:
 *            type: object
 *            properties:
 *              email:
 *                type: string
 *              otp:
 *                type: string
 *          required:
 *            - email
 *            - otp
 *      responses:
 *        200:
 *          description: verified
 *        401:
 *          description: credentials don't match
 *        400:
 *          description: user not found
 */

/**
 * @swagger
 * /api/auth/logout:
 *  post:
 *    tags:
 *      - Users
 *    name: logout
 *    summary: logout user
 *    consumes:
 *      -application/json
 *    parameters:
 *      - name: Authorization
 *        in: header
 *        required: true
 *        type: string
 *      - name: body
 *        in: body
 *        schema:
 *          type: object
 *          properties:
 *            otp:
 *              type: string
 *    responses:
 *      200:
 *        description: logged out
 *      400:
 *        description: otp does not match
 *      401:
 *        description: otp does not match
 */

