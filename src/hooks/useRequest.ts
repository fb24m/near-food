import { useQuery } from "@tanstack/react-query";
import { queryService } from "../services/catalog.service";

import { QueryTypes } from "../enums/queryTypes.enum";

export const useRequest = (request: QueryTypes, arg: string = '') => {
	return useQuery([], () => queryService[`${request}`](arg), {
		select: ({ data }) => data,
		retry: 0
	})
};