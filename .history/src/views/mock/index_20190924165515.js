

module.exports = {
    before(app) {
        // search
        app.get('/api/search/hot', (req, res) => {
            res.json(searchHot)
        })
        app.get('/api/search/questions*', (req, res) => {
            res.json(questions)
        })
        // questions
        app.get('/api/questions', (req, res) => {
            res.json(questions)
        })
        app.post('/api/questions', (req, res) => {
            res.sendStatus(201)
            res.json(question)
        })
        app.get('/api/questions/tag/*', (req, res) => {
            res.json(questions)
        })
        app.get('/api/questions/*', (req, res) => {
            res.json(questionAndAnswer)
        })
        app.patch('/api/questions/*', (req, res) => {
            res.sendStatus(201)
            res.json(question)
        })
        app.delete('/api/questions/*', (req, res) => {
            res.sendStatus(204)
            res.text('')
        })

        // 回答
        app.post('/api/questions/*/answer', (req, res) => {
            res.sendStatus(201)
            res.json(answer)
        })

        app.delete('/api/answers/*', (req, res) => {
            res.sendStatus(204)
            res.text('')
        })

        app.post('/api​/answers​/*/approval', (req, res) => {
            res.json(api)
        }),
            app.post('​/api/answers​/*/oppose', (req, res) => {
                res.json(api)
            })

        // tags 
        app.get('/api/tags/hot', (req, res) => {
            res.json(tagHot)
        })

        // 图片
        app.post('/api/image', (req, res) => {
            res.sendStatus(201)
            res.json(image)
        })

        app.post('/api/image/delete', (req, res) => {
            res.sendStatus(204)
            res.text('/api')
        })

        // 用户
        app.get('/api/user/questions', (req, res) => {
            res.json(questions)
        })

        app.get('/api/user/answers*', (req, res) => {
            res.json(answers)
        })

        app.get('/api/user', (req, res) => {
            if (Math.floor(Math.random() * 10) % 2) {
                res.json(userNew)
            } else {
                res.json(userOld)
            }

        })
    }
}