import React from 'react';
import { StyledConversationCover } from './styledComponents';
import { IconClear } from 'assets';

const ConversationCover = () => {
	return (
		<StyledConversationCover id="conversation-cover">
			<img src={IconClear} alt="" />
			<h1>Loqui Chat</h1>
			<p>
				Exchange messages with fellow users who are currently online. <br />
				Please note that your conversations are not permanent and will be removed upon leaving the site.
			</p>
		</StyledConversationCover>
	);
};

export default ConversationCover;
