/**
 * @swagger
 * /api/category/create:
 *  post:
 *    tags:
 *      - Category
 *    name: create
 *    summary: create a category
 *    consumes:
 *      - multipart/form-data
 *    parameters:
 *      - name: Authorization
 *        in: header
 *        required: true
 *        type: string
 *        example: Bearer token-string
 *      - name: image
 *        type: file
 *        in: formData
 *        description: Upload category image
 *      - name: name
 *        type: string
 *        in: formData
 *        description: category name
 *      - name: description
 *        type: string
 *        in: formData
 *        description: category description
 *    responses:
 *      200:
 *        description: category created
 *      400:
 *        description: bad request, category not created
 */

/**
 * @swagger
 * /api/category/get:
 *  get:
 *    tags:
 *      - Category
 *    name: Get
 *    summary: get all categories
 *    consumes:
 *    parameters:
 *      - name: Authorization
 *        in: header
 *        required: true
 *        type: string
 *        example: Bearer token-string
 *    responses:
 *      200:
 *        description: got all categories
 */

/**
 * @swagger
 * /api/category/update/{id}:
 *  put:
 *    tags:
 *      - Category
 *    name: Update
 *    summary: Update Category
 *    consumes:
 *      - multipart/form-data
 *    parameters:
 *      - name: Authorization
 *        in: header
 *        required: true
 *        type: string
 *        example: Bearer token-string
 *      - name: id
 *        in: path
 *        require: true
 *        type: string
 *      - name: image
 *        type: file
 *        in: formData
 *        description: Upload category image
 *      - name: name
 *        type: string
 *        in: formData
 *        description: category name
 *      - name: description
 *        type: string
 *        in: formData
 *        description: category description
 *    responses:
 *      200:
 *        description: updated category
 */

/**
 * @swagger
 * /api/category/delete/{id}:
 *  delete:
 *    tags:
 *      - Category
 *    name: Delete
 *    summary: Delete Category
 *    consumes:
 *      - multipart/form-data
 *    parameters:
 *      - name: Authorization
 *        in: header
 *        required: true
 *        type: string
 *        example: Bearer token-string
 *      - name: id
 *        in: path
 *        require: true
 *        type: string
 *    responses:
 *      200:
 *        description: deleted category
 */

