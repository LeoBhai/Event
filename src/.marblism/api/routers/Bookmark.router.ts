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

        createMany: procedure.input($Schema.BookmarkInputSchema.createMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).bookmark.createMany(input as any))),

        create: procedure.input($Schema.BookmarkInputSchema.create).mutation(async ({ ctx, input }) => checkMutate(db(ctx).bookmark.create(input as any))),

        deleteMany: procedure.input($Schema.BookmarkInputSchema.deleteMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).bookmark.deleteMany(input as any))),

        delete: procedure.input($Schema.BookmarkInputSchema.delete).mutation(async ({ ctx, input }) => checkMutate(db(ctx).bookmark.delete(input as any))),

        findFirst: procedure.input($Schema.BookmarkInputSchema.findFirst).query(({ ctx, input }) => checkRead(db(ctx).bookmark.findFirst(input as any))),

        findMany: procedure.input($Schema.BookmarkInputSchema.findMany).query(({ ctx, input }) => checkRead(db(ctx).bookmark.findMany(input as any))),

        findUnique: procedure.input($Schema.BookmarkInputSchema.findUnique).query(({ ctx, input }) => checkRead(db(ctx).bookmark.findUnique(input as any))),

        updateMany: procedure.input($Schema.BookmarkInputSchema.updateMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).bookmark.updateMany(input as any))),

        update: procedure.input($Schema.BookmarkInputSchema.update).mutation(async ({ ctx, input }) => checkMutate(db(ctx).bookmark.update(input as any))),

    }
    );
}

export interface ClientType<AppRouter extends AnyRouter, Context = AppRouter['_def']['_config']['$types']['ctx']> {
    createMany: {

        useMutation: <T extends Prisma.BookmarkCreateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.BookmarkCreateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.BookmarkCreateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.BookmarkCreateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    create: {

        useMutation: <T extends Prisma.BookmarkCreateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.BookmarkCreateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BookmarkGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BookmarkGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.BookmarkCreateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.BookmarkCreateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BookmarkGetPayload<T>, Context>) => Promise<Prisma.BookmarkGetPayload<T>>
            };

    };
    deleteMany: {

        useMutation: <T extends Prisma.BookmarkDeleteManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.BookmarkDeleteManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.BookmarkDeleteManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.BookmarkDeleteManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    delete: {

        useMutation: <T extends Prisma.BookmarkDeleteArgs>(opts?: UseTRPCMutationOptions<
            Prisma.BookmarkDeleteArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BookmarkGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BookmarkGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.BookmarkDeleteArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.BookmarkDeleteArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BookmarkGetPayload<T>, Context>) => Promise<Prisma.BookmarkGetPayload<T>>
            };

    };
    findFirst: {

        useQuery: <T extends Prisma.BookmarkFindFirstArgs, TData = Prisma.BookmarkGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.BookmarkFindFirstArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.BookmarkGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.BookmarkFindFirstArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.BookmarkFindFirstArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.BookmarkGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.BookmarkGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findMany: {

        useQuery: <T extends Prisma.BookmarkFindManyArgs, TData = Array<Prisma.BookmarkGetPayload<T>>>(
            input: Prisma.SelectSubset<T, Prisma.BookmarkFindManyArgs>,
            opts?: UseTRPCQueryOptions<string, T, Array<Prisma.BookmarkGetPayload<T>>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.BookmarkFindManyArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.BookmarkFindManyArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Array<Prisma.BookmarkGetPayload<T>>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Array<Prisma.BookmarkGetPayload<T>>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findUnique: {

        useQuery: <T extends Prisma.BookmarkFindUniqueArgs, TData = Prisma.BookmarkGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.BookmarkFindUniqueArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.BookmarkGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.BookmarkFindUniqueArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.BookmarkFindUniqueArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.BookmarkGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.BookmarkGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    updateMany: {

        useMutation: <T extends Prisma.BookmarkUpdateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.BookmarkUpdateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.BookmarkUpdateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.BookmarkUpdateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    update: {

        useMutation: <T extends Prisma.BookmarkUpdateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.BookmarkUpdateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BookmarkGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BookmarkGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.BookmarkUpdateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.BookmarkUpdateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BookmarkGetPayload<T>, Context>) => Promise<Prisma.BookmarkGetPayload<T>>
            };

    };
}
