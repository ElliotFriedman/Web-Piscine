#include <stdio.h>

int main()
{
	int i = 1;
	while (i < 18)
	{
		printf("<th>%d</th>\n", i);
		i++;
	}
	i = 1;
	while (i < 9)
	{
		printf("<tr>\n");
		int j = 0;
		while (j < 18)
		{
			printf("<td>%d</td>\n", i);
			j++;
		}
		printf("</tr>\n");
		i++;
	}
	return 0;
}
