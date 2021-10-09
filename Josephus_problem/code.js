<script>

	// Javascript code for Josephus Problem
	
	function josephus(n, k)
	{
		if (n == 1)
			return 1;
		else
			/* The position returned
			by josephus(n - 1, k) is
			adjusted because the
			recursive call josephus(n
			- 1, k) considers the
			original position k%n + 1
			as position 1 */
			return (josephus(n - 1, k)
					+ k-1) % n + 1;
	}
	
	let n = 14;
	let k = 2;
	document.write("The chosen " + "place is " + josephus(n, k));
	
</script>
