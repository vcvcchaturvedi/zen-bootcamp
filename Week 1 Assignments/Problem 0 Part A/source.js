var cat = {
 name: 'Fluffy',
 activities: ['play', 'eat cat food'],
 catFriends: [
 {
 name: 'bar',
 activities: ['be grumpy', 'eat bread omblet'],
 weight: 8,
 furcolor: 'white'
 }, 
 {
 name: 'foo',
 activities: ['sleep', 'pre-sleep naps'],
 weight: 3
 }
 ]
}
cat.height='2 ft';
cat.weight=10;
cat.name='Fluffyy';
for(let i in cat.catFriends)
{
	let temp=cat.catFriends[i];
	console.log(temp.activities);
}
for(let i in cat.catFriends)
{
	let temp=cat.catFriends[i];
	console.log(temp.name);
}
let sumWeight=cat.weight;
for(let i in cat.catFriends)
{
	let temp=cat.catFriends[i];
	sumWeight+=temp.weight;
}
console.log("Sum of the weights of all catFriends is = "+sumWeight);
let countActivities=0;
countActivities+=cat.activities.length;
for(let i in cat.catFriends)
{
	let temp=cat.catFriends[i];
	countActivities+=temp.activities.length;
}
console.log("Total number of all activities of the different cats is = "+countActivities);
cat.catFriends[0].activities.push('scratching','biting');
cat.catFriends[1].activities.push('running','meowing');
console.log(cat.catFriends);
for(let i in cat.catFriends)
{
	let temp=cat.catFriends[i];
	if(temp.name=='bar')
		temp.furcolor='black';
}
console.log(cat);