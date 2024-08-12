document.addEventListener('DOMContentLoaded', function(){
    fetch('./data2.json')
        .then(response => response.json())
        .then(data => {
            let totalScore = 0;
            let counterindex = 0;
            data[0].forEach(item => {
                totalScore += parseInt(item.score)
                if(counterindex == 0){
                    document.getElementById('reactions').textContent = item.score;
                }else if(counterindex == 1){
                    document.getElementById('memories').textContent = item.score;
                }else if(counterindex == 2){
                    document.getElementById('verbals').textContent = item.score;
                }else if(counterindex == 3){
                    document.getElementById('visuals').textContent = item.score;
                }
                counterindex += 1 
                const img = document.getElementById(item.category.toLowerCase()+'i')
                img.src = item.icon
                img.alt = item.category.toLowerCase() + 'icon'
               /*let li = document.createElement('li');
               li.classList.add(item.category.toLowerCase());

               li.innerHTML = `
               <span style="display: flex; gap: 10px" class="${item.category}c"
                ><img
                  src="${item.icon}"
                  alt="${item.category} icon"
                /><strong>${item.category}</strong></span
              >
              <span
                ><strong id="${item.category}s">${item.score}</strong>
                <span class="grading">/ 100</span></span
              >`;
              document.getElementById('summary-list').appendChild(li);*/
            });
            let overallScore = Math.round(totalScore /data[0].length);
            document.getElementById('overalls').textContent = overallScore;

            document.getElementById('performance').textContent = overallScore >= 70 ? 'Great' : 'Average';
            document.getElementById('percentage').textContent = overallScore >= 70 ? '65%' : '40%';
        })
        .catch(error => console.error('Error fetching data:', error));
});
const next = document.getElementById("button")

next.addEventListener('click', myfunction)
next.addEventListener('touchstart', myfunction)
next.addEventListener('keydown', function(event){
    if(event.key === 'Enter'){
        myfunction();
    }
})

function myfunction(){
    fetch('./data2.json')
       .then(response => response.json())
       .then(data => {
            var randomNum = Math.floor(Math.random() * data.length)
            let totalScore = 0;
            let counterindex = 0;
            data[randomNum].forEach(item => {
                totalScore += parseInt(item.score)
                if(counterindex == 0){
                    document.getElementById('reactions').textContent = item.score;
                }else if(counterindex == 1){
                    document.getElementById('memories').textContent = item.score;
                }else if(counterindex == 2){
                    document.getElementById('verbals').textContent = item.score;
                }else if(counterindex == 3){
                    document.getElementById('visuals').textContent = item.score;
                }
                counterindex += 1 
            });
            let overallScore = Math.round(totalScore /data[0].length);
            document.getElementById('overalls').textContent = overallScore;

            document.getElementById('performance').textContent = overallScore >= 70 ? 'Great' : 'Average';
            document.getElementById('percentage').textContent = overallScore >= 70 ? '65%' : '40%';
        })
    .catch(error => console.error('Error fetching data:', error));
}