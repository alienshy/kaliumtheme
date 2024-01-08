
window.requestAnimationFrame = function (){
    return (
        window.requestAnimationFrame ||
        function (callback){
            window.setTimeout(callback);
        }
    );
};