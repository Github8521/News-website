let apikey='b93d35496c0442b4a037cb9acb1a11a8'
let source='bbc-news'


const xhr= new XMLHttpRequest()
xhr.open('get',`https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=${apikey}`,true)
xhr.onload=function(){
    if(this.status ===200){
     let json= JSON.parse(this.responseText)
     let article=json.articles
    //  console.log(article)
    let newsaccordion=document.getElementById('newsaccordion')
    let news=''
    article.forEach(function(element,index){
        
      news +=`
     <div class="card">
     <div class="card-header" id="heading${index}">
       <h2 class="mb-0">
         <button class="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapse${index}" aria-expanded="false" aria-controls="collapse${index}">
      <b> Breaking News ${index +1}</b>
      ${element.title}
         </button>
       </h2>
     </div>
     <div id="collapse${index}" class="collapse" aria-labelledby="heading${index}" data-parent="#newsaccordion">
       <div class="card-body">
        ${element.description}.<a target="_blank" href="${element.url}" class="btn btn-primary ">read more</a>
       </div>
     </div>
   </div>`
   
  });
  newsaccordion.innerHTML=news
    
    }
    else{
        console.log('some error occur')
    }
}
xhr.send()