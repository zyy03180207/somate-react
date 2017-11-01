import React from 'react';

export default async function
    send (method,data,e)  {
        $.post('/bolgInf',{method:method,data:data}).done(function(res) {
            e(res);
        });
}


