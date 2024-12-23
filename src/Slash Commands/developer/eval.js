module.exports = {
    code: `
        $onlyForBotOwner[true]
        $eval[$option[code]]`,
    data: {
        "name": "eval",
        "description": "runs the given code",
        "options": [
          {
            "type": 3,
            "name": "code",
            "description": "the code to run",
            "required": true,
            "choices": []
          }
        ]
        
    }
}