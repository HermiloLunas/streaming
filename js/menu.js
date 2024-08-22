var hoje = new Date();

document.writeln(`
<nav>
<ul>
    <li>
        <a href="index.html"><span class="material-symbols-outlined">
            home
            </span> Home</a>
    </li>
    <li>
        Opções <span class="material-symbols-outlined">
            list
            </span>
        <ul>
            <li>
                <a href="audios.html"> <span class="material-symbols-outlined">
                    play_arrow
                    </span>Áudios</a>
            </li>
            <li>
                <a href="radios.html"><span class="material-symbols-outlined">
                    radio
                    </span>Rádios On</a>
            </li>
            <li>
                <a href="videos.html"><span class="material-symbols-outlined">
                    videocam
                    </span>Vídeos</a>
            </li>
        </ul>
    </li>

</ul>
</nav>
`);