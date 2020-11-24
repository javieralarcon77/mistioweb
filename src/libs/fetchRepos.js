export default async function(){
    const data = sessionStorage.getItem("repos");

    let myRepos = [];
    if(data){
        myRepos = JSON.parse(data);        
    }else{
        const response = await fetch('https://api.github.com/users/javieralarcon77/repos');
        myRepos = await response.json();
        //console.log(myRepos);
        sessionStorage.setItem("repos", JSON.stringify(myRepos));
    }

    return {
        repos: myRepos,
        total: myRepos.length
    }

}