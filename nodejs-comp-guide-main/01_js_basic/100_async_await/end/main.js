// POINT 非同期処理（await/async）
let a = 0;

init();
async function init() {
    try {
        const result = await new Promise((resolve, reject) => {
            setTimeout(() => {
                a = 1;
                reject(a)
            }, 2000);
        })
            console.log(result);
    } catch(e) {
        console.log('catchが実行', e)
    }
    
    // }).catch((c) => {
    //     console.log('catchが実行', c)
    // })
    
}

