import { Spin } from 'antd';
import ApiDiContainer, { controller } from '../../../shared/api/apiDiContainer';
import ReusedCard from '../../../shared/reusedCard';
import PostsTable from './postsTable';
import PostsCardTitleElements from './eventsButtonAndDescrInHeader';
import PostsAdditionalElements from './additionalElements';
import { IPosts } from '../model/IPosts';
import CardButtons from '../../../shared/lib/cardButtons';
import { useAppDispatch, useAppSelector } from '../../../store/hooks/redux';
import { reusedTableSlice } from '../../../store/reducers/reusedTableSlice';
import ReusedModalWithForm from '../../../shared/reusedModalWithForm/inedx';

const PostsContainer: React.FC<IPosts> = () => {
  const {
    data: posts,
    isLoading,
    refetch,
  } = ApiDiContainer.ProxyApiDict.useGetDictItemsQuery({
    endPoint: '/posts',
    controller: controller,
  });

  const { setLoadingTable } = reusedTableSlice.actions;
  const { loadingTable } = useAppSelector((state) => state.reusedTableReducer);
  const dispatch = useAppDispatch();

  if (isLoading) {
    return (
      <ReusedCard
        cardTitle={{
          cardTitleText: 'Идёт загрузка...',
        }}
        cardBody={{
          mainChildren: <Spin size='large' />,
        }}
      />
    );
  } else {
    return (
      <div>
        <ReusedCard
          cardTitle={{
            cardTitleText: 'Посты',
            cardTitleElements: <PostsCardTitleElements />,
          }}
          cardBody={{
            additionalElements: <PostsAdditionalElements />,
            cardActiveButtons: (
              <CardButtons
                addButtonConfig={{
                  showButton: true,
                }}
                reloadButtonConfig={{
                  showButton: true,
                  spinStatus: loadingTable,
                  onClick: () => {
                    dispatch(setLoadingTable(true));
                    refetch().then(() => dispatch(setLoadingTable(false)));
                  },
                }}
              />
            ),
            mainChildren: <PostsTable posts={posts} />,
          }}
        />
        <ReusedModalWithForm />
      </div>
    );
  }
};

export default PostsContainer;
