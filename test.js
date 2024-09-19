$(function(){
    $('select[name="user_type"] ').on('change', function()  {
        let arrType = getAgreeType();
        let optionType = $(this).parents('.box-body').find($('select[name="type"]'));
        optionType.empty();

        if($(this).val() == '과일'){ 
            for(prop in arrType['과일']){
                optionType.append('<option value='+prop+' >'+arrType['과일'][prop]+'</option>');
            }
        }else{                            
            for(prop in arrType['생선']){
                optionType.append('<option value='+prop+' >'+arrType['생선'][prop]+'</option>');
            }                  
        }        
    });
});