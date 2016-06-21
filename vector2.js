var Vector2 = function()
{
	this.x = 0;
	this.y = 0;
	
	this.set = function(newX, newY)
	{
		this.x = newX;
		this.y = newY;
	};
	
	this.magnitude = function()
	{
		return Math.sqrt(this.x*this.x + this.y*this.y);
	};
	
	this.normalize = function()
	{
		var mag = this.magnitude();
		if(mag == 0) return;
		
		this.x /= mag;
		this.y /= mag;
	};
	
	this.add = function(v2)
	{
		this.x += v2.x;
		this.y += v2.y;
	};
	
	this.subtract - function(v2)
	{
		this.x -= v2.x;
		this.y -= v2.y;
	};
	
	this.multiplyScalar = function(num)
	{
		this.x *= num;
		this.y *= num;
	}; 
};

