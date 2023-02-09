let cl = console.log;

function getAngularDev(skillset) {
    // api call
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (skillset.toLowerCase().includes(`angular`)) {
                resolve(`Candidate is shortlisted for Angular Profile...`)
            } else {
                reject(`Candidate is not shortlisted yet... `)
            }
        }, 2000);
    })
}

function firstTecInterview() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let result = Math.random() >= .4 ? true : false;
            if (result) {
                resolve(`Candidate is shortlisted for 2nd round`)
            } else {
                reject(`Candidate is Rejected he/she not have basic skills `)
            }
        }, 1000);
    })
}
function secTecInterview() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let result = Math.random() >= .4 ? true : false;
            if (result) {
                resolve(`Candidate is shortlisted for Ml round`)
            } else {
                reject(`Candidate is good in basics, but not able to exicute `)
            }
        }, 3000);
    })
}

function mlRound() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let result = Math.random() >= .4 ? true : false;
            if (result) {
                resolve(`Candidate is selected for given profile`)
            } else {
                reject(`Candidate is not able to explain his/her previous work`)
            }
        }, 5000);
    })
}

let skillName = Math.random() >= .5 ? 'Angular 15' : 'React 18';
cl(skillName)

async function init() {
    try {
        await getAngularDev(skillName)
        await firstTecInterview();
        await secTecInterview();
        let result = await mlRound();
        cl(result)
        Swal.fire({
            icon: 'success',
            title: result,
            showConfirmButton: true,
            timer: 2000
        })
    } catch (err) {
        // cl(err)
        Swal.fire({
            icon: 'error',
            title: err,
            timer: 2000
        })
    }
}
init()