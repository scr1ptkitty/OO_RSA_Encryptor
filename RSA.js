// Euclid function for computing the greatest common divisor of nonnegative integers A and B
function gcd(A, B)
{
	if (B == 0)
	{
		return A;
	}
	else
	{
		return gcd(B, A % B);
	}
}

class RSA
{
	constructor(p0, q0)
	{
		// p and q are the pair of primes used for key generation
		this.p = p0;
		this.q = q0;
		
		// N is the modulus for encryption and decryption
		this.N = this.p * this.q;
		
		// Tn is the totient, from which the public and private keys are derived
		this.Tn = (this.p - 1)*(this.q - 1);
		
		// e is the public key, used for encryption; d is the private key, used for decryption
		// A public key must be chosen such that 1 < e < Tn AND gcd(e, TN) = 1
		this.e = this.Tn;
		while (gcd(this.e, this.Tn) != 1)
		{
			this.e = Math.floor(Math.random() * ( (Tn - 1) - 2) ) + 2;
		}
		
		// A private key must be computed such that d = 1 + (k*Tn)/e; where k = some nonnegative nonzero integer
		this.k = Math.floor(Math.random() * 100) + 1; // random scalar k, such that 1 <= k <= 100
		this.d = 1 + (k * Tn)/e;
	}
	
	// Convert a character into its corresponding number value for encryption
	function mapChar(ch)
	{
		var out = 0;
		ch = ch.toUpperCase();
		
		switch(ch)
		{
			case "A":
				out = 1;
			break;
			case "B":
				out = 2;
			break;
			case "C":
				out = 3;
			break;
			case "D":
				out = 4;
			break;
			case "E":
				out = 5;
			break;
			case "F":
				out = 6;
			break;
			case "G":
				out = 7;
			break;
			case "H":
				out = 8;
			break;
			case "I":
				out = 9;
			break;
			case "J":
				out = 10;
			break;
			case "K":
				out = 11;
			break;
			case "L":
				out = 12;
			break;
			case "M":
				out = 13;
			break;
			case "N":
				out = 14;
			break;
			case "O":
				out = 15;
			break;
			case "P":
				out = 16;
			break;
			case "Q":
				out = 17;
			break;
			case "R":
				out = 18;
			break;
			case "S":
				out = 19;
			break;
			case "T":
				out = 20;
			break;
			case "U":
				out = 21;
			break;
			case "V":
				out = 22;
			break;
			case "W":
				out = 23;
			break;
			case "X":
				out = 24;
			break;
			case "Y":
				out = 25;
			break;
			case "Z":
				out = 26;
			break;
			case " ":
				out = 27;
			break;
			case ".":
				out = 28;
			break;
			case ",":
				out = 29;
			break;
			case "!":
				out = 30;
			break;
			case "?":
				out = 31;
			break;
			case "'":
				out = 32;
			break;
	}
		
		return out;
	}
	
	// Encrypt a message M into ciphertext C
	function encryptRSA(M)
	{
		var C = "";
		
		for (var i = 0; i < M.length; i++)
		{
			var m = mapChar(M.charAt(i));
			C += (Math.pow(m, this.e) % N).toString();
		}
		
		return C;
	}
	
	// Decrypt ciphertext C into a message M
	/* public function decryptRSA(C)
	{
		var M = "";
		
		return M;
	}
	*/
}