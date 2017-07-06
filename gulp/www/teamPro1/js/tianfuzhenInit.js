function userDataInit(){
    $.ajax({
        url:"./data/tianfuzhen.json",
        success:function(json){
            if(json.isSuccess && !json.errorCode){
                global(json.global)
                invit(json.invit)
                pics(json.pics)
                user(json.user)
                video(json.video)
            }
        }
    })
}

function global(data){
    var str = '<div class="search-result">'
    $.each(data,function(i,v){
        if(!(v instanceof Array)){
            str += '<a href="javascript:;" class="each-result">' +
                        '<dl class="global-one">'+
                            '<dt><img src="'+ v.src+'" alt=""></dt>'+
                            '<dd>'+
                                '<h3>田馥甄</h3>'+
                                '<div>粉丝数：<span>'+ v.num+'</span></div>'+
                            '</dd>'+
                        '</dl>'+
                    '</a>';
        }else{
            $.each(v,function(i,item){
                str += '<a href="javascript:;" class="each-result">' +
                            '<dl class="global">'+
                                '<dt><img src="'+item.src+'" alt=""></dt>'+
                                '<dd>'+
                                    '<h3 class="text-nobr"><span>田馥甄</span>'+item.title+'</h3>'+
                                    '<div>'+
                                    '<p>'+item.info+'</p>'+
                                    '<span>'+item.tim+'</span>'+
                                    '</div>'+
                                '</dd>'+
                            '</dl>'+
                        '</a>';
            })
        }
    })
    str += '</div>'
    $(".global").html(str)
}

function invit(data){

    var str = '<div class="search-result">'
    $.each(data,function(i,v){

        str += '<a href="javascript:;" class="each-result">' +
                '<dl class="invit">'+
                '<dt><img src="'+v.src+'" alt=""></dt>'+
                '<dd>'+
                '<h3><span>田馥甄</span>'+v.title+'</h3>'+
                '<div>'+
                '<p>来自田馥甄的圈子</p>'+
                '<span><i class="icon iconfont icon-yanjing3"></i>'+v.nums+'</span>'+
                '</div>'+
                '</dd>'+
                '</dl>'+
                '</a>';
    })
    str += '</div>'
    $(".invit").html(str)
}


function pics(data){
    var str = '<div class="search-result">'
    $.each(data,function(i,v){
        str += '<a href="javascript:;" class="each-result">' +
            '<dl class="pics">'+
            '<dt><img src="'+ v.src+'" alt=""></dt>'+
            '<dd>'+
            '<h3>'+ v.title+'</h3>'+
            '<div>'+
            '<p>田馥甄</p>'+
            '<span><i class="icon iconfont icon-tuwen"></i>'+v.num+'</span>'+
            '</div>'+
            '</dd>'+
            '</dl>'+
            '</a>';
    })
    str += '</div>'
    $(".pic").html(str)
}


function user(data){

    var str = '<div class="search-result">'
    $.each(data,function(i,v){
        str += '<a href="javascript:;" class="each-result">' +
            '<dl class="user">'+
                '<dt><img src="'+ v.src+'" alt=""></dt>'+
                '<dd>'+
                    '<h3>田馥甄<span>'+ v.user+'</span></h3>'+
                    '<div>被关注：<span>'+ v.num+'</span></div>'+
                '</dd>'+
            '</dl>'+
            '</a>';
    })
    str += '</div>'
    $(".user").html(str)
}


function video(data){

    var str = '<div class="search-result">'
    $.each(data,function(i,v){
        str += '<a href="javascript:;" class="each-result">'+
            '<dl class="video">'+
                '<dt><img src="'+ v.src+'" alt=""></dt>'+
                '<dd>'+
                    '<h3>'+ v.title+'</h3>'+
                    '<div><i class="icon iconfont icon-mv"></i>田馥甄</div>'+
                '</dd>'+
            '</dl>'+
            '</a>';
    })
    str += '</div>'
    $(".video").html(str)
}






userDataInit()
