// 非同期処理（Promise）
let a = 0;

async function init() {
    try{
        const result = await new Promise((resolve, reject) => {
            setTimeout(() => {
                a = 1;
                resolve(a)
            }, 2000);
        })
        console.log(result);
    
} catch(el) {
    console.log('catchが実行', el)
}
    // }).catch((c) => {
    //     console.log('catchが実行', c)
    // })    
}
