import { defineStore } from "pinia"
import { ref } from 'vue';

interface JokeProps {
    joke: string
    note: string
}

interface TypeOfNotesProps {
    type: string
    label: string
    length?: number
    percent?: number
}

export const useJokes = defineStore('storageJokes', () => 
{
    const joke = ref<string>('');
    const jokes= ref<Array<JokeProps>>([]);

    const typeOfNotes: Array<TypeOfNotesProps> = [
        { 
            type: 'not-funny-at-all', 
            label: ':('
        },
        { 
            type: 'bland', 
            label: ":/"
        },
        { 
            type: 'kinda', 
            label: ':|'
        },
        { 
            type: 'funny', 
            label: ':)'
        },
        { 
            type: 'very funny', 
            label: ':D'
        }
    ]
    
    const getJokes = async () => {
        const response = await fetch('https://geek-jokes.sameerkumar.website/api?format=json')
        const { joke: jokeApi } = await response.json()
        joke.value = jokeApi??'No joke found'
    }

    const setJoke = ({joke, note} : JokeProps) => jokes.value.push({ joke, note });

    const clearJokes = () => jokes.value = [];

    const getReport = () => {
        const report: Array<TypeOfNotesProps> = typeOfNotes.map(type => {

            const length = jokes.value.filter((joke: JokeProps) => joke.note === type.type).length;
            const percent = length * jokes.value.length;

            return {
                length,
                percent,
                ...type
            }
            
        });

        return report;
    }


    return { 
        joke, 
        jokes, 
        getJokes, 
        setJoke, 
        clearJokes, 
        typeOfNotes,
        getReport
    }
})