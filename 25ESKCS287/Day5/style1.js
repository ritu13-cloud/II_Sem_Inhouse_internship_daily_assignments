*{
    margin:0;
    padding:0;
    box-sizing:border-box;
}

body{
    font-family:Arial, Helvetica, sans-serif;
    background:#f5f5f5;
}

.navbar{
    background:#5c5470;
    padding:15px;
}

.navbar-brand{
    font-size:24px;
    font-weight:bold;
}

#search{
    width:260px;
}

#sortBtn{
    background:#f4b400;
    border:none;
    color:black;
    font-weight:600;
}

#sortBtn:hover{
    background:#e0a800;
}

h2{
    color:#444;
    font-weight:bold;
}

.card{
    border:none;
    border-radius:10px;
    transition:0.3s;
}

.card:hover{
    transform:translateY(-5px);
    box-shadow:0 8px 20px rgba(0,0,0,0.15);
}

.card-body{
    padding:20px;
}

.card h4{
    color:#5c5470;
    margin-bottom:10px;
}

.card p{
    margin-bottom:8px;
    color:#555;
}

.badge{
    font-size:15px;
    padding:8px 12px;
}

.details-btn{
    width:100%;
    margin-top:15px;
    background:#5c5470;
    color:white;
    border:none;
    padding:10px;
    border-radius:6px;
    font-weight:600;
}

.details-btn:hover{
    background:#4a4560;
}

.details{
    display:none;
    margin-top:18px;
    padding-top:12px;
    border-top:1px solid #ddd;
    text-align:left;
}

.details p{
    margin-bottom:10px;
    font-size:15px;
}

#count{
    font-size:16px;
}

@media(max-width:768px){

    #search{
        width:180px;
    }

    .navbar .container{
        display:flex;
        flex-direction:column;
        gap:12px;
    }

}