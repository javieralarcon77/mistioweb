export default async function(){
    const data = sessionStorage.getItem("repos");

    if(data){
        return JSON.parse(data);        
    }else{
        const response = await fetch('https://api.github.com/users/javieralarcon77/repos');
        let myRepos = await response.json();
        //console.log(myRepos);
        sessionStorage.setItem("repos", JSON.stringify(myRepos));
        return myRepos;
    }
}