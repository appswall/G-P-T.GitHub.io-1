import React from 'react';
import useStore from '@store/store';

const StopGeneratingButton = () => {
  const setGenerating = useStore((state) => state.setGenerating);
  const generating = useStore((state) => state.generating);

  return generating ? (
    <div
      className='absolute bottom-6 left-0 right-0 m-auto flex md:w-full md:m-auto gap-0 md:gap-2 justify-center'
      onClick={() => setGenerating(false)}
    >
      <button className='btn relative btn-neutral border-0 md:border'>
        <div className='flex w-full items-center justify-center gap-2'>
<svg viewBox="0 0 160 140">
<rect fill="#CF2FFF" width="5" height="40" x="0" y="50">
	<animate 
		attributeName="x"
		dur="2.2s"
		values="150; -10"
		repeatCount="indefinite"/>
</rect>
<rect fill="#AF2FFF" width="5" height="70" x="12" y="35">
	<animate 
		attributeName="x"
		dur="2.2s"
		begin="-.2s"
		values="150; -10"
		repeatCount="indefinite"/>
</rect>
<rect fill="#CF2FFF" width="5" height="100" x="24" y="20">
	<animate 
		attributeName="x"
		dur="2.2s"
		begin="-.4s"
		values="150; -10"
		repeatCount="indefinite"/>
</rect>
<rect fill="#EF2FFF" width="5" height="70" x="36" y="35">
	<animate 
		attributeName="x"
		dur="2.2s"
		begin="-.6s"
		values="150; -10"
		repeatCount="indefinite"/>
</rect>
<rect fill="#FF2FFF" width="5" height="40" x="48" y="50">
	<animate 
		attributeName="x"
		dur="2.2s"
		begin="-.8s"
		values="150; -10"
		repeatCount="indefinite"/>
</rect>
<rect fill="#CF2FEF" width="5" height="70" x="60" y="35">
	<animate 
		attributeName="x"
		dur="2.2s"
		begin="-1s"
		values="150; -10"
		repeatCount="indefinite"/>
</rect>
<rect fill="#AF2FFF" width="5" height="100" x="72" y="20">
	<animate 
		attributeName="x"
		dur="2.2s"
		begin="-1.2s"
		values="150; -10"
		repeatCount="indefinite"/>
</rect>
<rect fill="#9F2FFF" width="5" height="70" x="84" y="35">
	<animate 
		attributeName="x"
		dur="2.2s"
		begin="-1.4s"
		values="150; -10"
		repeatCount="indefinite"/>
</rect>
<rect fill="#7F2FFF" width="5" height="40" x="96" y="50">
	<animate 
		attributeName="x"
		dur="2.2s"
		begin="-1.6s"
		values="150; -10"
		repeatCount="indefinite"/>
</rect>
<rect fill="#9F2FFF" width="5" height="70" x="108" y="35">
	<animate 
		attributeName="x"
		dur="2.2s"
		begin="-1.8s"
		values="150; -10"
		repeatCount="indefinite"/>
</rect>
<rect fill="#AF2FFF" width="5" height="100" x="120" y="20">
	<animate 
		attributeName="x"
		dur="2.2s"
		begin="-2s"
		values="150; -10"
		repeatCount="indefinite"/>
</rect>
</svg>
             ... Ⓧ ChatGPT 
        </div>
      </button>
    </div>
  ) : (
    <></>
  );
};

export default StopGeneratingButton;
