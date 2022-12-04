import React from 'react';

const Chat = () => {
    return (
        <div>
            <h1 className="text-orange-700 text-4xl font-mono text-center mt-16 mb-10 p-4 ">Chat With Us</h1>
            <div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
                <div>
                    <div className="chat chat-start">
                        <div className="chat-bubble">Hello, <br />can i sell my car and buy another both here.</div>
                    </div>
                    <div className="chat chat-end">
                        <div className="chat-bubble">yes Ofcourse Sir</div>
                    </div>
                </div>
                <div>
                    <div className="flex justify-center gap-1 my-1 w-full">
                        <kbd className="kbd">q</kbd>
                        <kbd className="kbd">w</kbd>
                        <kbd className="kbd">e</kbd>
                        <kbd className="kbd">r</kbd>
                        <kbd className="kbd">t</kbd>
                        <kbd className="kbd">y</kbd>
                        <kbd className="kbd">u</kbd>
                        <kbd className="kbd">i</kbd>
                        <kbd className="kbd">o</kbd>
                        <kbd className="kbd">p</kbd>
                    </div>
                    <div className="flex justify-center gap-1 my-1 w-full">
                        <kbd className="kbd">a</kbd>
                        <kbd className="kbd">s</kbd>
                        <kbd className="kbd">d</kbd>
                        <kbd className="kbd">f</kbd>
                        <kbd className="kbd">g</kbd>
                        <kbd className="kbd">h</kbd>
                        <kbd className="kbd">j</kbd>
                        <kbd className="kbd">k</kbd>
                        <kbd className="kbd">l</kbd>
                    </div>
                    <div className="flex justify-center gap-1 my-1 w-full">
                        <kbd className="kbd">z</kbd>
                        <kbd className="kbd">x</kbd>
                        <kbd className="kbd">c</kbd>
                        <kbd className="kbd">v</kbd>
                        <kbd className="kbd">b</kbd>
                        <kbd className="kbd">n</kbd>
                        <kbd className="kbd">m</kbd>
                        <kbd className="kbd">/</kbd>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Chat;