 $('.post-title').each(function () {
    var upper = $(this).html();
    $(this).replaceWith(upper.replace(
                          /(\w)(\w*)/g,
                          (_, firstChar, rest) => firstChar + rest.toLowerCase()
     )); 
});

