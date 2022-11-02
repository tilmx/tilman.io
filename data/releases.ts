import ImageFramed from '../public/images/music/album/framed.jpg';
import ImageDimensions from '../public/images/music/album/dimensions.jpg';
import { StaticImageData } from 'next/image';

export const Releases: { id: string; title: string; image: StaticImageData; links: { spotify?: string; appleMusic?: string; itunes?: string; deezer?: string; } }[] = [
    {
        id: 'framed',
        title: 'Framed',
        image: ImageFramed,
        links: {
            spotify: 'https://open.spotify.com/album/7mtDCWtOb60E8hIcEdrIop',
            appleMusic: 'https://geo.music.apple.com/song/1651115815',
        }
    },
    {
        id: 'dimensions',
        title: 'Dimensions',
        image: ImageDimensions,
        links: {
            spotify: 'https://open.spotify.com/track/2C0iJEwDnUvP8xVPxDkni6',
            appleMusic: 'https://music.apple.com/de/album/dimensions-single/1623142688',
            itunes: 'https://music.apple.com/de/album/dimensions-single/1623142688?app=itunes',
            deezer: 'https://www.deezer.com/album/317077647'
        }
    }
]
