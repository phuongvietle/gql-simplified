import { withFilter } from 'graphql-subscriptions';
import { pubsub } from '../../pubsub';

const getTenUsers = {
	subscribe: () => pubsub.asyncIterator('likeSubscription')
};

// const getTenUsers = {
// 	subscribe: withFilter(
// 		() => pubsub.asyncIterator('likeSubscription'),
// 		(payloads, variables) => {
// 			return payloads.likeSubscription.id === variables.id;
// 		}
// 	)
// };

export default getTenUsers;