const mongoose = require('mongoose');
mongoose.Promise = global.Promise

module.exports = mongoose.connect('mongodb+srv://marcos:<password>@mymoneyapp.3seq7.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', { useNewUrlParser: true })


mongoose.Error.messages.general.required = "O atributo '{PATH}' é obrigatório."

mongoose.Error.messages.Number.min = "O '{VALUE}' informado é menor que o limite minimo de '{MIN}'."

mongoose.Error.messages.Number.max = "O '{VALUE}' informado é maior que o limite maximo de '{MAX}'."

mongoose.Error.messages.String.enum = "'{VALUE}' não é válido para o atributo '{PATH}'"
