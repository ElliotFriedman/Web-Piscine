#include <stdio.h>

int main()
{
	int i = 1;
	printf("<div id=\"container\">\n<table>\n");
	while (i < 19)
	{
		printf("<th>%d</th>\n", i);
		i++;
	}
	i = 1;
	while (i < 9)
	{
		printf("<tr id=\"a%c\">\n", i + 'A' - 1);
		int j = 0;
		while (j < 18)
		{
			printf("<td id=\"%c%c\">\n		<div>\n<pre id=\"t\">1.008</pre>\n<h3>\n	H\n	</h3>\n<p id=\"b\">\n		1\n</p>\n	</div>\n</td>\n", 'a' + i, 'a' + j);
			j++;
		}
		printf("</tr>\n");
		i++;
	}
	printf("</table>\n</div>\n");
	return 0;
}
