/* eslint-disable */
import { type RouterFactory, type ProcBuilder, type BaseConfig, db } from ".";
import * as _Schema from '@zenstackhq/runtime/zod/input';
const $Schema: typeof _Schema = (_Schema as any).default ?? _Schema;
import { checkRead, checkMutate } from '../helper';
import type { Prisma } from '@prisma/client';
import type { UseTRPCMutationOptions, UseTRPCMutationResult, UseTRPCQueryOptions, UseTRPCQueryResult, UseTRPCInfiniteQueryOptions, UseTRPCInfiniteQueryResult } from '@trpc/react-query/shared';
import type { TRPCClientErrorLike } from '@trpc/client';
import type { AnyRouter } from '@trpc/server';

export default function createRouter<Config extends BaseConfig>(router: RouterFactory<Config>, procedure: ProcBuilder<Config>) {
    return router({

        createMany: procedure.input($Schema.NewsSourceInputSchema.createMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).newsSource.createMany(input as any))),

        create: procedure.input($Schema.NewsSourceInputSchema.create).mutation(async ({ ctx, input }) => checkMutate(db(ctx).newsSource.create(input as any))),

        deleteMany: procedure.input($Schema.NewsSourceInputSchema.deleteMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).newsSource.deleteMany(input as any))),

        delete: procedure.input($Schema.NewsSourceInputSchema.delete).mutation(async ({ ctx, input }) => checkMutate(db(ctx).newsSource.delete(input as any))),

        findFirst: procedure.input($Schema.NewsSourceInputSchema.findFirst).query(({ ctx, input }) => checkRead(db(ctx).newsSource.findFirst(input as any))),

        findMany: procedure.input($Schema.NewsSourceInputSchema.findMany).query(({ ctx, input }) => checkRead(db(ctx).newsSource.findMany(input as any))),

        findUnique: procedure.input($Schema.NewsSourceInputSchema.findUnique).query(({ ctx, input }) => checkRead(db(ctx).newsSource.findUnique(input as any))),

        updateMany: procedure.input($Schema.NewsSourceInputSchema.updateMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).newsSource.updateMany(input as any))),

        update: procedure.input($Schema.NewsSourceInputSchema.update).mutation(async ({ ctx, input }) => checkMutate(db(ctx).newsSource.update(input as any))),

    }
    );
}

export interface ClientType<AppRouter extends AnyRouter, Context = AppRouter['_def']['_config']['$types']['ctx']> {
    createMany: {

        useMutation: <T extends Prisma.NewsSourceCreateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.NewsSourceCreateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.NewsSourceCreateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.NewsSourceCreateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    create: {

        useMutation: <T extends Prisma.NewsSourceCreateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.NewsSourceCreateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.NewsSourceGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.NewsSourceGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.NewsSourceCreateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.NewsSourceCreateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.NewsSourceGetPayload<T>, Context>) => Promise<Prisma.NewsSourceGetPayload<T>>
            };

    };
    deleteMany: {

        useMutation: <T extends Prisma.NewsSourceDeleteManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.NewsSourceDeleteManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.NewsSourceDeleteManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.NewsSourceDeleteManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    delete: {

        useMutation: <T extends Prisma.NewsSourceDeleteArgs>(opts?: UseTRPCMutationOptions<
            Prisma.NewsSourceDeleteArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.NewsSourceGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.NewsSourceGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.NewsSourceDeleteArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.NewsSourceDeleteArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.NewsSourceGetPayload<T>, Context>) => Promise<Prisma.NewsSourceGetPayload<T>>
            };

    };
    findFirst: {

        useQuery: <T extends Prisma.NewsSourceFindFirstArgs, TData = Prisma.NewsSourceGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.NewsSourceFindFirstArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.NewsSourceGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.NewsSourceFindFirstArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.NewsSourceFindFirstArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.NewsSourceGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.NewsSourceGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findMany: {

        useQuery: <T extends Prisma.NewsSourceFindManyArgs, TData = Array<Prisma.NewsSourceGetPayload<T>>>(
            input: Prisma.SelectSubset<T, Prisma.NewsSourceFindManyArgs>,
            opts?: UseTRPCQueryOptions<string, T, Array<Prisma.NewsSourceGetPayload<T>>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.NewsSourceFindManyArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.NewsSourceFindManyArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Array<Prisma.NewsSourceGetPayload<T>>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Array<Prisma.NewsSourceGetPayload<T>>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findUnique: {

        useQuery: <T extends Prisma.NewsSourceFindUniqueArgs, TData = Prisma.NewsSourceGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.NewsSourceFindUniqueArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.NewsSourceGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.NewsSourceFindUniqueArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.NewsSourceFindUniqueArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.NewsSourceGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.NewsSourceGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    updateMany: {

        useMutation: <T extends Prisma.NewsSourceUpdateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.NewsSourceUpdateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.NewsSourceUpdateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.NewsSourceUpdateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    update: {

        useMutation: <T extends Prisma.NewsSourceUpdateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.NewsSourceUpdateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.NewsSourceGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.NewsSourceGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.NewsSourceUpdateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.NewsSourceUpdateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.NewsSourceGetPayload<T>, Context>) => Promise<Prisma.NewsSourceGetPayload<T>>
            };

    };
}
