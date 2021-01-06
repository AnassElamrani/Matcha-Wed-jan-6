exports.validationInput = (req, res, next) => {
    var dataErr = {};
    var regExpName = /^[a-zA-Z\-]+$/;
    var regExpLast = /^[a-zA-Z\-]+$/;
    var regExpUserName = /^\D{2,}\d*$/i;
    // /^[a-zA-Z0-9]+$/;
    ///^\D{2,}\d*$/i // for the username regex
    var regExpEmail = /([A-Z]|[a-z]|[^<>()\[\]\\\/.,;:\s@"]){4,}\@([A-Z]|[a-z]|[^<>()\[\]\\\/.,;:\s@"]){4,}\.(com|net)/;
    var regExpPassword = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{6,})/;
    (req.body.userName) ? ((regExpUserName.test(req.body.userName)) ? "" : dataErr.userNameErr = "Enter a valid username") : "";
    (req.body.firstName) ? ((regExpName.test(req.body.firstName)) ? "" : dataErr.firstNameErr = "Enter a valid firstName") : "";
    (req.body.lastName) ? ((regExpLast.test(req.body.lastName)) ? "" : dataErr.lastNameErr = "Enter a valid lastname") : "";
    (req.body.email) ? ((regExpEmail.test(req.body.email)) ? "" : dataErr.emailErr = "Enter a valid email") : "";
    (req.body.password) ? ((regExpPassword.test(req.body.password)) ? "" : dataErr.PassErr = "Enter a valid password") : "";
    // (req.body.cnfrmPassword) ? ((regExpPassword.test(req.body.cnfrmPassword)) ? "" : dataErr.cnfrmPassErr = "Enter a valid password") : "";
    (req.body.newPassword) ? ((regExpPassword.test(req.body.newPassword)) ? "" : dataErr.validNewpErr = "Enter a valid password") : "";

    if (regExpName.test(req.body.firstName) && regExpLast.test(req.body.lastName) && regExpUserName.test(req.body.userName) && regExpEmail.test(req.body.email) && regExpPassword.test(req.body.password) && regExpPassword.test(req.body.cnfrmPassword) && regExpPassword.test(req.body.newPassword))
        next();
    else{
        res.locals.input = dataErr;
        next();
    }
    //after passing error to res.locals ... merge the object in the next middleware
}