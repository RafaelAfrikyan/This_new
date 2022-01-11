


function myIssue (str) {

    return function (acc) {
        console.log(str + acc)
        str += acc;
        return myIssue(str);
    }
}
const result = myIssue('')

result('vfd')('cdx')('fds')

