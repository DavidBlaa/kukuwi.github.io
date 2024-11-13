export function getRandomIndex(list:any[])
	{
   if(list != undefined)
			{
				return parseInt(""+Math.random() * (list.length));
			}

			return -1;
	}


export function getRandomObject(list:any[]):any{

			return list[getRandomIndex(list)]

}