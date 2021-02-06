/** Declaration file generated by dts-gen */
declare module 'sourcecred' {
  export = sourcecred;

  declare const sourcecred: {
      sourcecred: {
          api: {
              credrank: {
                  credrank: any;
              };
              grain: {
                  grain: any;
              };
              graph: {
                  graph: any;
              };
          };
          core: {
              address: {
                  makeAddressModule: any;
              };
              algorithm: {
                  graphToMarkovChain: {
                      adjacencySource: any;
                      createConnections: any;
                      createOrderedSparseMarkovChain: any;
                      distributionToNodeDistribution: any;
                      normalize: any;
                      normalizeNeighbors: any;
                      permute: any;
                  };
                  markovChain: {
                      findStationaryDistribution: any;
                      sparseMarkovChainAction: any;
                      sparseMarkovChainFromTransitionMatrix: any;
                  };
              };
              credGraph: {
                  CredGraph: any;
                  jsonParser: {
                      parse: any;
                      parseOrThrow: any;
                  };
                  parser: {
                      parse: any;
                      parseOrThrow: any;
                  };
              };
              graph: {
                  Direction: {
                      ANY: any;
                      IN: any;
                      OUT: any;
                  };
                  EdgeAddress: {
                      append: any;
                      assertValid: any;
                      assertValidParts: any;
                      empty: string;
                      fromParts: any;
                      fromRaw: any;
                      hasPrefix: any;
                      parser: {
                          parse: any;
                          parseOrThrow: any;
                      };
                      toParts: any;
                      toString: any;
                  };
                  Graph: any;
                  NodeAddress: {
                      append: any;
                      assertValid: any;
                      assertValidParts: any;
                      empty: string;
                      fromParts: any;
                      fromRaw: any;
                      hasPrefix: any;
                      parser: {
                          parse: any;
                          parseOrThrow: any;
                      };
                      toParts: any;
                      toString: any;
                  };
                  compareGraphs: any;
                  edgeToParts: any;
                  edgeToString: any;
                  edgeToStrings: any;
                  nodeToString: any;
              };
              weightedGraph: {
                  empty: any;
                  fromJSON: any;
                  merge: any;
                  overrideWeights: any;
                  toJSON: any;
              };
              weights: {
                  compareWeights: any;
                  copy: any;
                  empty: any;
                  fromJSON: any;
                  merge: any;
                  parser: {
                      parse: any;
                      parseOrThrow: any;
                  };
                  toJSON: any;
              };
          };
          instance: {
              readInstance: {
                  ReadInstance: any;
                  getNetworkReadInstance: any;
                  getOriginReadInstance: any;
              };
          };
          ledger: {
              grain: {
                  DECIMAL_PRECISION: number;
                  ONE: string;
                  ZERO: string;
                  add: any;
                  div: any;
                  divideFloat: any;
                  eq: any;
                  format: any;
                  formatAndTrim: any;
                  fromApproximateFloat: any;
                  fromFloatString: any;
                  fromInteger: any;
                  fromString: any;
                  gt: any;
                  gte: any;
                  lt: any;
                  lte: any;
                  mul: any;
                  multiplyFloat: any;
                  parser: {
                      parse: any;
                      parseOrThrow: any;
                  };
                  splitBudget: any;
                  sub: any;
                  sum: any;
                  toFloatRatio: any;
              };
              identity: {
                  IDENTITY_PREFIX: string;
                  aliasParser: {
                      parse: any;
                      parseOrThrow: any;
                  };
                  contractions: any;
                  graphNode: any;
                  identityParser: {
                      parse: any;
                      parseOrThrow: any;
                  };
                  identityTypeParser: {
                      parse: any;
                      parseOrThrow: any;
                  };
                  nameFromString: any;
                  nameParser: {
                      parse: any;
                      parseOrThrow: any;
                  };
                  newIdentity: any;
              };
              ledger: {
                  Ledger: any;
              };
              manager: {
                  LedgerManager: any;
              };
              storage: {
                  GithubStorage: any;
              };
              utils: {
                  diffLedger: any;
                  distributions: {
                      applyDistributions: any;
                      computeCredAccounts: any;
                      computeDistribution: any;
                  };
                  ensureIdentityExists: any;
              };
          };
          plugins: {
              discord: {
                  declaration: {
                      addsReactionEdgeType: {
                          backwardName: string;
                          defaultWeight: {
                              backwards: number;
                              forwards: number;
                          };
                          description: string;
                          forwardName: string;
                          prefix: string;
                      };
                      authorsMessageEdgeType: {
                          backwardName: string;
                          defaultWeight: {
                              backwards: number;
                              forwards: number;
                          };
                          description: string;
                          forwardName: string;
                          prefix: string;
                      };
                      declaration: {
                          edgePrefix: string;
                          edgeTypes: {
                              backwardName: string;
                              defaultWeight: {
                                  backwards: number;
                                  forwards: number;
                              };
                              description: string;
                              forwardName: string;
                              prefix: string;
                          }[];
                          name: string;
                          nodePrefix: string;
                          nodeTypes: {
                              defaultWeight: number;
                              description: string;
                              name: string;
                              pluralName: string;
                              prefix: string;
                          }[];
                          userTypes: {
                              defaultWeight: number;
                              description: string;
                              name: string;
                              pluralName: string;
                              prefix: string;
                          }[];
                      };
                      edgePrefix: string;
                      memberNodeType: {
                          defaultWeight: number;
                          description: string;
                          name: string;
                          pluralName: string;
                          prefix: string;
                      };
                      mentionsEdgeType: {
                          backwardName: string;
                          defaultWeight: {
                              backwards: number;
                              forwards: number;
                          };
                          description: string;
                          forwardName: string;
                          prefix: string;
                      };
                      messageNodeType: {
                          defaultWeight: number;
                          description: string;
                          name: string;
                          pluralName: string;
                          prefix: string;
                      };
                      nodePrefix: string;
                      propsEdgeType: {
                          backwardName: string;
                          defaultWeight: {
                              backwards: number;
                              forwards: number;
                          };
                          description: string;
                          forwardName: string;
                          prefix: string;
                      };
                      reactionNodeType: {
                          defaultWeight: number;
                          description: string;
                          name: string;
                          pluralName: string;
                          prefix: string;
                      };
                      reactsToEdgeType: {
                          backwardName: string;
                          defaultWeight: {
                              backwards: number;
                              forwards: number;
                          };
                          description: string;
                          forwardName: string;
                          prefix: string;
                      };
                  };
                  utils: {
                      identity: {
                          createIdentities: any;
                          createIdentity: any;
                      };
                  };
              };
              discourse: {
                  address: {
                      likeAddress: any;
                      postAddress: any;
                      topicAddress: any;
                      userAddress: any;
                  };
                  declaration: {
                      authorsPostEdgeType: {
                          backwardName: string;
                          defaultWeight: {
                              backwards: number;
                              forwards: number;
                          };
                          description: string;
                          forwardName: string;
                          prefix: string;
                      };
                      authorsTopicEdgeType: {
                          backwardName: string;
                          defaultWeight: {
                              backwards: number;
                              forwards: number;
                          };
                          description: string;
                          forwardName: string;
                          prefix: string;
                      };
                      createsLikeEdgeType: {
                          backwardName: string;
                          defaultWeight: {
                              backwards: number;
                              forwards: number;
                          };
                          description: string;
                          forwardName: string;
                          prefix: string;
                      };
                      declaration: {
                          edgePrefix: string;
                          edgeTypes: {
                              backwardName: string;
                              defaultWeight: {
                                  backwards: number;
                                  forwards: number;
                              };
                              description: string;
                              forwardName: string;
                              prefix: string;
                          }[];
                          name: string;
                          nodePrefix: string;
                          nodeTypes: {
                              defaultWeight: number;
                              description: string;
                              name: string;
                              pluralName: string;
                              prefix: string;
                          }[];
                          userTypes: {
                              defaultWeight: number;
                              description: string;
                              name: string;
                              pluralName: string;
                              prefix: string;
                          }[];
                      };
                      edgePrefix: string;
                      likeNodeType: {
                          defaultWeight: number;
                          description: string;
                          name: string;
                          pluralName: string;
                          prefix: string;
                      };
                      likesEdgeType: {
                          backwardName: string;
                          defaultWeight: {
                              backwards: number;
                              forwards: number;
                          };
                          description: string;
                          forwardName: string;
                          prefix: string;
                      };
                      nodePrefix: string;
                      postNodeType: {
                          defaultWeight: number;
                          description: string;
                          name: string;
                          pluralName: string;
                          prefix: string;
                      };
                      postRepliesEdgeType: {
                          backwardName: string;
                          defaultWeight: {
                              backwards: number;
                              forwards: number;
                          };
                          description: string;
                          forwardName: string;
                          prefix: string;
                      };
                      referencesPostEdgeType: {
                          backwardName: string;
                          defaultWeight: {
                              backwards: number;
                              forwards: number;
                          };
                          description: string;
                          forwardName: string;
                          prefix: string;
                      };
                      referencesTopicEdgeType: {
                          backwardName: string;
                          defaultWeight: {
                              backwards: number;
                              forwards: number;
                          };
                          description: string;
                          forwardName: string;
                          prefix: string;
                      };
                      referencesUserEdgeType: {
                          backwardName: string;
                          defaultWeight: {
                              backwards: number;
                              forwards: number;
                          };
                          description: string;
                          forwardName: string;
                          prefix: string;
                      };
                      topicContainsPostEdgeType: {
                          backwardName: string;
                          defaultWeight: {
                              backwards: number;
                              forwards: number;
                          };
                          description: string;
                          forwardName: string;
                          prefix: string;
                      };
                      topicHasLikedPostEdgeType: {
                          backwardName: string;
                          defaultWeight: {
                              backwards: number;
                              forwards: number;
                          };
                          description: string;
                          forwardName: string;
                          prefix: string;
                      };
                      topicNodeType: {
                          defaultWeight: number;
                          description: string;
                          name: string;
                          pluralName: string;
                          prefix: string;
                      };
                      userNodeType: {
                          defaultWeight: number;
                          description: string;
                          name: string;
                          pluralName: string;
                          prefix: string;
                      };
                  };
              };
              ethereum: {
                  declaration: {
                      declaration: {
                          edgePrefix: string;
                          edgeTypes: any[];
                          name: string;
                          nodePrefix: string;
                          nodeTypes: {
                              defaultWeight: number;
                              description: string;
                              name: string;
                              pluralName: string;
                              prefix: string;
                          }[];
                          userTypes: {
                              defaultWeight: number;
                              description: string;
                              name: string;
                              pluralName: string;
                              prefix: string;
                          }[];
                      };
                      edgePrefix: string;
                      ethAddressEntryType: {
                          defaultWeight: number;
                          description: string;
                          name: string;
                          pluralName: string;
                          prefix: string;
                      };
                      nodePrefix: string;
                  };
                  utils: {
                      address: {
                          nodeAddressForEthAddress: any;
                          parseAddress: any;
                          truncateEthAddress: any;
                      };
                      identity: {
                          createIdentities: any;
                          createIdentity: any;
                      };
                  };
              };
              github: {
                  declaration: {
                      declaration: {
                          edgePrefix: string;
                          edgeTypes: {
                              backwardName: string;
                              defaultWeight: {
                                  backwards: number;
                                  forwards: number;
                              };
                              description: string;
                              forwardName: string;
                              prefix: string;
                          }[];
                          name: string;
                          nodePrefix: string;
                          nodeTypes: {
                              defaultWeight: number;
                              description: string;
                              name: string;
                              pluralName: string;
                              prefix: string;
                          }[];
                          userTypes: {
                              defaultWeight: number;
                              description: string;
                              name: string;
                              pluralName: string;
                              prefix: string;
                          }[];
                      };
                      repoNodeType: {
                          defaultWeight: number;
                          description: string;
                          name: string;
                          pluralName: string;
                          prefix: string;
                      };
                      userNodeType: {
                          defaultWeight: number;
                          description: string;
                          name: string;
                          pluralName: string;
                          prefix: string;
                      };
                  };
                  edges: {
                      AUTHORS_TYPE: string;
                      CORRESPONDS_TO_COMMIT_TYPE: string;
                      HAS_PARENT_TYPE: string;
                      MERGED_AS_TYPE: string;
                      Prefix: {
                          authors: string;
                          base: string;
                          correspondsToCommit: string;
                          hasParent: string;
                          mergedAs: string;
                          reacts: string;
                          reactsHeart: string;
                          reactsHooray: string;
                          reactsRocket: string;
                          reactsThumbsUp: string;
                          references: string;
                      };
                      REACTS_TYPE: string;
                      REFERENCES_TYPE: string;
                      createEdge: {
                          authors: any;
                          correspondsToCommit: any;
                          hasParent: any;
                          mergedAs: any;
                          reacts: any;
                          references: any;
                      };
                      fromRaw: any;
                      toRaw: any;
                  };
                  nodes: {
                      BOT_SUBTYPE: string;
                      COMMENT_TYPE: string;
                      COMMIT_TYPE: string;
                      ISSUE_TYPE: string;
                      PULL_TYPE: string;
                      Prefix: {
                          base: string;
                          bot: string;
                          comment: string;
                          commit: string;
                          issue: string;
                          issueComment: string;
                          pull: string;
                          pullComment: string;
                          repo: string;
                          review: string;
                          reviewComment: string;
                          user: string;
                          userlike: string;
                      };
                      REPO_TYPE: string;
                      REVIEW_TYPE: string;
                      USERLIKE_TYPE: string;
                      USER_SUBTYPE: string;
                      fromRaw: any;
                      loginAddress: any;
                      toRaw: any;
                  };
              };
              initiatives: {
                  declaration: {
                      championsEdgeType: {
                          backwardName: string;
                          defaultWeight: {
                              backwards: number;
                              forwards: number;
                          };
                          description: string;
                          forwardName: string;
                          prefix: string;
                      };
                      contributesToEdgeType: {
                          backwardName: string;
                          defaultWeight: {
                              backwards: number;
                              forwards: number;
                          };
                          description: string;
                          forwardName: string;
                          prefix: string;
                      };
                      contributesToEntryEdgeType: {
                          backwardName: string;
                          defaultWeight: {
                              backwards: number;
                              forwards: number;
                          };
                          description: string;
                          forwardName: string;
                          prefix: string;
                      };
                      contributionEntryType: {
                          defaultWeight: number;
                          description: string;
                          name: string;
                          pluralName: string;
                          prefix: string;
                      };
                      declaration: {
                          edgePrefix: string;
                          edgeTypes: {
                              backwardName: string;
                              defaultWeight: {
                                  backwards: number;
                                  forwards: number;
                              };
                              description: string;
                              forwardName: string;
                              prefix: string;
                          }[];
                          name: string;
                          nodePrefix: string;
                          nodeTypes: {
                              defaultWeight: number;
                              description: string;
                              name: string;
                              pluralName: string;
                              prefix: string;
                          }[];
                          userTypes: any[];
                      };
                      dependencyEntryType: {
                          defaultWeight: number;
                          description: string;
                          name: string;
                          pluralName: string;
                          prefix: string;
                      };
                      dependsOnEdgeType: {
                          backwardName: string;
                          defaultWeight: {
                              backwards: number;
                              forwards: number;
                          };
                          description: string;
                          forwardName: string;
                          prefix: string;
                      };
                      edgePrefix: string;
                      initiativeNodeType: {
                          defaultWeight: number;
                          description: string;
                          name: string;
                          pluralName: string;
                          prefix: string;
                      };
                      nodeEntryTypes: {
                          CONTRIBUTION: {
                              defaultWeight: number;
                              description: string;
                              name: string;
                              pluralName: string;
                              prefix: string;
                          };
                          DEPENDENCY: {
                              defaultWeight: number;
                              description: string;
                              name: string;
                              pluralName: string;
                              prefix: string;
                          };
                          REFERENCE: {
                              defaultWeight: number;
                              description: string;
                              name: string;
                              pluralName: string;
                              prefix: string;
                          };
                      };
                      nodePrefix: string;
                      referenceEntryType: {
                          defaultWeight: number;
                          description: string;
                          name: string;
                          pluralName: string;
                          prefix: string;
                      };
                      referencesEdgeType: {
                          backwardName: string;
                          defaultWeight: {
                              backwards: number;
                              forwards: number;
                          };
                          description: string;
                          forwardName: string;
                          prefix: string;
                      };
                  };
              };
          };
      };
  };
}
