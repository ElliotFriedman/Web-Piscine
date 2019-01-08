#include <stdio.h>

int main(int argc, char **argv)
{
	int i = 0;
	while (i < 26)
	{
		printf("#%c%c", argv[1][0], 'a' + i);
		if (i + 1 != 26)
			printf(", ");
		i++;
	}

	printf("\n");
	i = 0;
	while (i < 26)
	{
		printf("#%c%c", 'a' + i, argv[1][0]);
		if (i + 1 != 26)
			printf(", ");
		i++;
	}
	printf("\n");
	return 0;
}
