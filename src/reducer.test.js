import {hotColdReducer} from './reducer';
import {generateAuralUpdate, makeGuess, restartGame} from './actions';

describe('hotColdReducer', () => {

    it('Should set the initial state when nothing is passed in', () => {
        const state = hotColdReducer(undefined, '__UNKNOWN');
        expect(state.guesses).toEqual([]);
        expect(state.feedback).toEqual('Make your guess!');
        expect(state.auralStatus).toEqual('');
    });
    it('Should return current state of unknown action', () => {
        const currentState = {};
        const state = hotColdReducer(currentState, '__UNKNOWN');
        expect(state).toBe(currentState);
    });
    
    describe('generateAuralUpdate', () => {
        it('Should generate aural update', () => {
            let state = {
                guesses: [1, 2],
                feedback: 'Make your guess!',
                auralStatus: '',
                correctAnswer: 9
            }
            state = hotColdReducer(state, generateAuralUpdate());
            expect(state).toEqual({
                guesses: [2, 1],
                feedback: 'Make your guess!',
                auralStatus: "Here's the status of the game right now: Make your guess! You've made 2 guesses. In order of most- to least-recent, they are: 2, 1",
                correctAnswer: 9
            });
        });
    });

    describe('restartGame', () => {
        it('Should restart game', () => {
            let state = {
                guesses: [2, 1],
                feedback: 'Make your guess!',
                auralStatus: "Here's the status of the game right now: Make your guess! You've made 2 guesses. In order of most- to least-recent, they are: 2, 1",
                correctAnswer: 9  
            }
            state = hotColdReducer(state, restartGame(9));
            expect(state.guesses).toEqual([]);
            expect(state.feedback).toEqual('Make your guess!');
            expect(state.auralStatus).toEqual('');
        });
    });

    describe('makeGuess', () => {
        it('Should enter a users guess', () => {
            let guess = 10;
            let state = {
                guesses: [1, 2],
                feedback: 'Make your guess!',
                auralStatus: '',
                correctAnswer: 9
            }
            state = hotColdReducer(state, makeGuess(90));
            expect(state).toEqual({
                guesses: [1, 2, 90],
                feedback: "You're Ice Cold...",
                auralStatus: "",
                correctAnswer: 9
            });
            
        });
    });
});
