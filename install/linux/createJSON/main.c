#include <stdio.h>
#include "tinydir.h"

/**
 * @file   main.c
 * @author Milán Unicsovics, u.milan at gmail dot com
 * @date   August, 2013
 * @brief  Creates JSON array from *.mp3 files in current directory
 */
int main(void)
{
    tinydir_dir dir;
    int i;
    int count = 0;
    if (tinydir_open_sorted(&dir, ".") == -1)
    {
        perror("Error opening file");
        goto bail;
    }

    for (i = 0; i < dir.n_files; i++)
    {
        tinydir_file file;
        if (tinydir_readfile_n(&dir, &file, i) == -1)
        {
            perror("Error getting file");
            goto bail;
        }

        size_t size = strlen(file.name);

        if (size >= 4 &&
            file.name[size-4] == '.' &&
            file.name[size-3] == 'm' &&
            file.name[size-2] == 'p' &&
            file.name[size-1] == '3')
        {
            count++;
            if (count == 1)
            {
                printf("[");
            }
            if (count > 1)
            {
                printf(",");
            }
            printf(" \"%s\"", file.name);
        }
    }

    if (count > 0)
    {
        printf("]");
    }

    bail:
        tinydir_close(&dir);
        return 0;
}

