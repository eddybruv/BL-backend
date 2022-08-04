/**
 * @swagger
 * /api/image/upload:
 *  post  :
 *    tags:
 *      - Image
 *    name: Upload pic
 *    summary: upload one or more pictures
 *    consumes:
 *      - multipart/form-data
 *    parameters:
 *      - name: image
 *        in: formData
 *        required: true
 *        type: file
 *    responses:
 *      200:
 *        description: got all categories
 */